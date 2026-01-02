"use client";

import { Code2, Server, Sparkles, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end application development with modern frameworks and best practices",
    features: [
      "React, Next.js, Angular frontends",
      "Node.js, Python backends",
      "SQL & NoSQL databases",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "hover:border-blue-500",
    shadowColor: "hover:shadow-blue-500/20",
  },
  {
    icon: Server,
    title: "DevOps & Cloud",
    description:
      "Scalable cloud infrastructure and automated deployment pipelines",
    features: [
      "AWS, Azure, Google Cloud",
      "Docker, Kubernetes, Jenkins",
      "CI/CD & Security automation",
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "hover:border-purple-500",
    shadowColor: "hover:shadow-purple-500/20",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Cutting-edge AI integration to transform your business operations",
    features: [
      "OpenAI & Llama integration",
      "Custom chatbots & assistants",
      "Workflow automation with AI",
    ],
    color: "text-cyan-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "hover:border-cyan-500",
    shadowColor: "hover:shadow-cyan-500/20",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From full-stack development to AI integration, we deliver
              cutting-edge solutions tailored to your business needs
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`group relative overflow-hidden rounded-3xl border-2 backdrop-blur-sm bg-card/50 ${service.borderColor} ${service.shadowColor} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
              >
                <div
                  className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <CardHeader className="relative">
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check
                          className={`w-5 h-5 ${service.color} mt-0.5 flex-shrink-0`}
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
