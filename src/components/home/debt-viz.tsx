"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export function DebtViz() {
  return (
    <section className="bg-section py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
              Stop overpaying <br />
              <span className="text-accent">on interest.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              High-interest credit cards and loans can drain your monthly budget. By consolidating your debt into your mortgage, you can significantly reduce your monthly payments and improve your cash flow.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-bold text-primary">Lower Monthly Payments</h4>
                  <p className="text-sm text-muted-foreground">Reduce your total monthly obligation by up to 50%.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-bold text-primary">One Simple Payment</h4>
                  <p className="text-sm text-muted-foreground">Simplify your finances with a single monthly withdrawal.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-bold text-primary">Improve Credit Score</h4>
                  <p className="text-sm text-muted-foreground">Pay off high-utilization revolving credit to boost your score.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visualization Chart */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-border/50">
            <h3 className="text-xl font-bold text-center mb-8 text-primary">Monthly Payment Comparison</h3>
            
            <div className="flex justify-center items-end gap-8 h-auto mb-8">
              {/* Before Bar */}
              <div className="flex flex-col items-center gap-2 w-32 group">
                <div className="text-red-500 font-bold mb-2 opacity-100 group-hover:bg-gray-400/20 py-4 px-4 rounded-md transition-opacity">$2,800</div>
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="w-full bg-red-100 rounded-t-lg relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-full bg-red-500/20" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-red-700 font-bold text-xs uppercase tracking-wider">Before</div>
                </motion.div>
                <div className="text-sm font-medium text-muted-foreground text-center">Multiple Debts</div>
              </div>

              {/* Arrow */}
              <div className="pb-12 text-muted-foreground">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  VS
                </motion.div>
              </div>

              {/* After Bar */}
              <div className="flex flex-col items-center gap-2 w-32 group">
                <div className="text-green-600 font-bold mb-2 opacity-100 group-hover:bg-gray-400/20 py-4 px-4 rounded-md transition-opacity">$1,450</div>
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "52%" }} // 1450/2800 approx 52%
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="w-full bg-green-100 rounded-t-lg relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-full bg-green-500/20" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-green-700 font-bold text-xs uppercase tracking-wider">After</div>
                </motion.div>
                <div className="text-sm font-medium text-muted-foreground text-center">Consolidated</div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-primary font-medium">
                Potential Monthly Savings: <span className="text-green-600 font-bold text-lg">$1,350</span>
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
