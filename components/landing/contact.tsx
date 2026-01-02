"use client";

import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message anytime",
    value: "sadiqonemail@gmail.com",
    href: "mailto:sadiqonemail@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    value: "+91 956 088 2068",
    href: "tel:+919560882068",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4">Get in Touch</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Reach out and let's discuss your
              project
            </p>
          </div>
        </FadeIn>

        {/* Contact Cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.title}
                href={method.href}
                className="group block"
              >
                <Card className="h-full rounded-2xl border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <p className="text-blue-600 font-medium">
                          {method.value}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </StaggerContainer>

        {/* Footer */}
        <FadeIn delay={600}>
          <div className="text-center mt-20 pt-12 border-t">
            <p className="text-muted-foreground">
              © 2026 Okhla Consultancy. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
