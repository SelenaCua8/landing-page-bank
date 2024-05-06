"use client";
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";

export function FirstBlock() {
  return (
    <div className="relative p-4 md:py-40">
      <BackgroundRadialRight />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-7xl font-semibold">
              The
              <span className="block">Clean</span>
              Garden
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Orientados a dar soluciones integrales para espacios verdes de
              mediana y gran escala en espacios públicos, empresas o
              particulares. Los espacios verdes constituyen uno de los
              principales articuladores de la vida social. Son lugares de
              encuentro, de integración, promueven la diversidad cultural
              generan valor simbólico, identidad y pertenencia. Asimismo,
              contribuyen en la regulación hídrica y en la reducción del impacto
              de la ciudad o industria construida sobre el medio ambiente. Y
              ofrecen un ecosistema apropiado para la conservación de la
              biodiversidad.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blueRadial"
              >
                Ver más
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="flex items-center justify-center">
          <Image
            src="/assets/AbouUs.jpg"
            alt="Card"
            width={450}
            height={500}
            className="h-auto w-72 md:w-full"
          />
        </MotionTransition>
      </div>
    </div>
  );
}
