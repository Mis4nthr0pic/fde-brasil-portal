"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { submitApplication } from "@/lib/applications/submit";
import { READINESS_STORAGE_KEY } from "@/lib/readiness/questions";
import type { EnglishLevel, ReadinessResult } from "@/types";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("Email inválido"),
  linkedin: z.string().url("URL do LinkedIn inválida"),
  portfolio: z.string().min(3, "GitHub ou portfólio"),
  location: z.string().min(2, "Cidade/país"),
  currentRole: z.string().min(2, "Role atual"),
  currentCompany: z.string().optional(),
  englishLevel: z.enum(["basico", "intermediario", "avancado", "fluente"]),
  mainInterest: z.string().min(10, "Descreva seu interesse"),
  seekingRemote: z.enum(["sim", "nao", "talvez"]),
  hasClientExperience: z.enum(["sim", "nao"]),
  hasDoneDemo: z.enum(["sim", "nao"]),
  hasAiExperience: z.enum(["sim", "nao"]),
  bestProjectUrl: z.string().url("URL inválida").or(z.literal("")).optional(),
  motivation: z.string().min(20, "Conte um pouco mais (mín. 20 caracteres)"),
});

type FormValues = z.infer<typeof schema>;

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [readiness, setReadiness] = useState<ReadinessResult | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      seekingRemote: "talvez",
      hasClientExperience: "nao",
      hasDoneDemo: "nao",
      hasAiExperience: "nao",
      englishLevel: "intermediario",
    },
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(READINESS_STORAGE_KEY);
      if (stored) setReadiness(JSON.parse(stored) as ReadinessResult);
    } catch {
      /* ignore */
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    await submitApplication({
      name: data.name,
      email: data.email,
      linkedin: data.linkedin,
      portfolio: data.portfolio,
      location: data.location,
      currentRole: data.currentRole,
      currentCompany: data.currentCompany,
      englishLevel: data.englishLevel as EnglishLevel,
      mainInterest: data.mainInterest,
      seekingRemote: data.seekingRemote === "sim",
      hasClientExperience: data.hasClientExperience === "sim",
      hasDoneDemo: data.hasDoneDemo === "sim",
      hasAiExperience: data.hasAiExperience === "sim",
      bestProjectUrl: data.bestProjectUrl ?? "",
      readinessLevel: readiness?.level,
      readinessScore: readiness?.score,
      motivation: data.motivation,
      submittedAt: new Date().toISOString(),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="border-primary/30">
        <CardHeader>
          <CardTitle>Recebido.</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            A FDE Brasil começa pequena e curada. Vamos revisar sua aplicação e
            te chamar se fizer sentido para o primeiro grupo.
          </p>
          <p className="text-sm">
            Enquanto isso, confira os{" "}
            <a href="/eventos" className="text-primary hover:underline">
              próximos encontros
            </a>{" "}
            ou refaça o{" "}
            <a href="/readiness" className="text-primary hover:underline">
              Readiness Score
            </a>
            .
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {readiness && (
        <div className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm">
          Readiness detectado: <strong>{readiness.label}</strong> ({readiness.score}/
          {readiness.maxScore}) — enviado junto com a aplicação.
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2 sm:grid-cols-1">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Cidade / país</Label>
          <Input id="location" {...register("location")} />
          {errors.location && (
            <p className="text-xs text-destructive">{errors.location.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input id="linkedin" placeholder="https://linkedin.com/in/..." {...register("linkedin")} />
          {errors.linkedin && (
            <p className="text-xs text-destructive">{errors.linkedin.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="portfolio">GitHub ou portfólio</Label>
          <Input id="portfolio" {...register("portfolio")} />
          {errors.portfolio && (
            <p className="text-xs text-destructive">{errors.portfolio.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentRole">Role atual</Label>
          <Input id="currentRole" {...register("currentRole")} />
          {errors.currentRole && (
            <p className="text-xs text-destructive">{errors.currentRole.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentCompany">Empresa atual (opcional)</Label>
          <Input id="currentCompany" {...register("currentCompany")} />
        </div>

        <div className="space-y-2">
          <Label>Nível de inglês</Label>
          <Select
            value={watch("englishLevel")}
            onValueChange={(v) =>
              setValue("englishLevel", v as FormValues["englishLevel"])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basico">Básico</SelectItem>
              <SelectItem value="intermediario">Intermediário</SelectItem>
              <SelectItem value="avancado">Avançado</SelectItem>
              <SelectItem value="fluente">Fluente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="mainInterest">Principal interesse na comunidade</Label>
          <Input
            id="mainInterest"
            placeholder="Ex.: migrar para FDE, melhorar demos, oportunidades remotas..."
            {...register("mainInterest")}
          />
          {errors.mainInterest && (
            <p className="text-xs text-destructive">
              {errors.mainInterest.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Está buscando vaga remota?</Label>
          <Select
            value={watch("seekingRemote")}
            onValueChange={(v) =>
              setValue("seekingRemote", v as FormValues["seekingRemote"])
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sim">Sim</SelectItem>
              <SelectItem value="nao">Não</SelectItem>
              <SelectItem value="talvez">Talvez / explorando</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Já trabalhou com clientes?</Label>
          <Select
            value={watch("hasClientExperience")}
            onValueChange={(v) =>
              setValue("hasClientExperience", v as "sim" | "nao")
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sim">Sim</SelectItem>
              <SelectItem value="nao">Não</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Já fez demo técnica?</Label>
          <Select
            value={watch("hasDoneDemo")}
            onValueChange={(v) => setValue("hasDoneDemo", v as "sim" | "nao")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sim">Sim</SelectItem>
              <SelectItem value="nao">Não</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>AI agents, RAG, evals ou integrações?</Label>
          <Select
            value={watch("hasAiExperience")}
            onValueChange={(v) => setValue("hasAiExperience", v as "sim" | "nao")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sim">Sim</SelectItem>
              <SelectItem value="nao">Não</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="bestProjectUrl">Link do melhor projeto público</Label>
          <Input
            id="bestProjectUrl"
            placeholder="https://..."
            {...register("bestProjectUrl")}
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="motivation">Por que você quer entrar na FDE Brasil?</Label>
          <Textarea
            id="motivation"
            rows={5}
            placeholder="Seja direto: o que você busca, o que pode contribuir, onde está na carreira."
            {...register("motivation")}
          />
          {errors.motivation && (
            <p className="text-xs text-destructive">{errors.motivation.message}</p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Enviando..." : "Enviar aplicação"}
      </Button>
    </form>
  );
}
