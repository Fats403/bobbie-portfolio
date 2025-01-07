"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { TextAnimate } from "./ui/text-animate";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <div className="container relative z-50 mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
        <TextAnimate animation="slideLeft" by="character">
          Lets Work Together!
        </TextAnimate>
      </h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -45 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="block mb-8 md:mb-0"
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fbe-cool-be-fun.webp?alt=media&token=27800179-c08c-4f77-a460-204d0b0d7a1f"
            alt="Contact illustration"
            width={400}
            height={400}
            className="rounded-full mx-auto w-64 md:w-full"
          />
        </motion.div>

        <Form {...form}>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name..."
                        className="bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Email Address..."
                        className="bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message..."
                        className="min-h-[150px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <Button
                type="submit"
                className="w-full md:w-auto px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Submit
              </Button>
            </motion.div>
          </motion.form>
        </Form>
      </div>
    </div>
  );
}
