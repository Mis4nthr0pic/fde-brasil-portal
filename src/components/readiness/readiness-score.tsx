"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReadinessAnswer, ReadinessResult } from "@/types";
import {
  readinessQuestions,
  READINESS_STORAGE_KEY,
} from "@/lib/readiness/questions";
import {
  calculateReadinessResult,
  getAnsweredCount,
  getMaxReadinessScore,
} from "@/lib/readiness/scoring";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function ReadinessScore() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ReadinessAnswer[]>([]);
  const [result, setResult] = useState<ReadinessResult | null>(null);

  const total = readinessQuestions.length;
  const current = readinessQuestions[step];
  const progress = result
    ? 100
    : Math.round((getAnsweredCount(answers) / total) * 100);

  const currentAnswer = answers.find((a) => a.questionId === current?.id);

  const finish = useCallback((finalAnswers: ReadinessAnswer[]) => {
    const computed = calculateReadinessResult(finalAnswers);
    setResult(computed);
    if (typeof window !== "undefined") {
      localStorage.setItem(READINESS_STORAGE_KEY, JSON.stringify(computed));
    }
  }, []);

  const selectOption = (value: number) => {
    const nextAnswers = [
      ...answers.filter((a) => a.questionId !== current.id),
      { questionId: current.id, value },
    ];
    setAnswers(nextAnswers);

    if (step < total - 1) {
      setTimeout(() => setStep((s) => s + 1), 200);
    } else {
      finish(nextAnswers);
    }
  };

  const goBack = () => {
    if (result) {
      setResult(null);
      setStep(total - 1);
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem(READINESS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ReadinessResult;
        if (parsed?.level && parsed?.label) setResult(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  if (result) {
    return (
      <div className="space-y-8">
        <Card className="border-primary/30">
          <CardHeader>
            <Badge className="w-fit">{result.label}</Badge>
            <CardTitle className="text-2xl sm:text-3xl pt-2">
              Seu nível: {result.label}
            </CardTitle>
            <p className="text-muted-foreground">{result.summary}</p>
            <p className="text-sm text-muted-foreground pt-2">
              Pontuação: {result.score} / {result.maxScore} (máx.{" "}
              {getMaxReadinessScore()})
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Pontos fortes</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {result.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Gaps principais</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {result.gaps.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Próximos passos</h4>
              <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                {result.nextSteps.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row pt-4">
              <Button asChild size="lg">
                <Link href={siteConfig.links.apply}>
                  Aplicar para entrar
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setResult(null);
                  setAnswers([]);
                  setStep(0);
                  localStorage.removeItem(READINESS_STORAGE_KEY);
                }}
              >
                Refazer avaliação
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            Pergunta {step + 1} de {total}
          </span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>

      <Card>
        <CardHeader>
          <Badge variant="outline" className="w-fit">
            {current.category}
          </Badge>
          <CardTitle className="text-lg sm:text-xl leading-snug pt-2">
            {current.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {current.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => selectOption(opt.value)}
              className={cn(
                "w-full rounded-lg border border-border px-4 py-3 text-left text-sm transition-colors hover:border-primary/50 hover:bg-accent/50",
                currentAnswer?.value === opt.value &&
                  "border-primary bg-primary/10"
              )}
            >
              {opt.label}
            </button>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={goBack}
          disabled={step === 0 && !result}
        >
          <ArrowLeft className="size-4" />
          Voltar
        </Button>
        {currentAnswer !== undefined && step < total - 1 && (
          <Button variant="ghost" onClick={() => setStep((s) => s + 1)}>
            Próxima
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>

      <p className="text-xs text-muted-foreground flex items-start gap-2">
        <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
        Resultado salvo localmente no navegador. Na aplicação, envie se quiser
        compartilhar com a curadoria.
      </p>
    </div>
  );
}
