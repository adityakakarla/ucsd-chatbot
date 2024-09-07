import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "./ui/textarea"
import { generateResponse } from "@/app/actions"
import { useState } from "react"
import { readStreamableValue } from "ai/rsc"
import { DNA } from "react-loader-spinner"
import { UserButton } from "@clerk/nextjs"

const schema = z.object({
  prompt: z.string().min(1, { message: "enter a prompt or Chancellor Khosla will eat you" }),
  temperature: z.number().min(0).max(2),
})

export default function Chatbot() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<string>('')

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      prompt: '',
      temperature: 1,
    }
  })

  async function onSubmit(data: z.infer<typeof schema>) {
    setLoading(true)
    const response = await generateResponse(data.prompt, data.temperature)
    setLoading(false)

    for await (const content of readStreamableValue(response)) {
      setResponse(content as string)
    }
  }

  if (response || loading) {
    return (
      <div className="flex flex-col items-center border-2 border-dark p-4 rounded-lg space-y-4 text-center w-full">
        <p className={`w-full md:w-[500px] text-left ${loading && 'flex flex-col items-center'}`}>{loading ? <DNA
          visible={true}
          height="120"
          width="120"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        /> : response}</p>
        <div className="flex justify-between w-full">
          <div className="w-7"/>
        {response && <Button type="submit" className="bg-medium1 hover:bg-medium2 rounded-2xl" onClick={() => setResponse('')}>retry</Button>}
        <UserButton/>
        </div>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center border-2 border-dark p-4 rounded-lg w-full md:w-auto">
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-lg">prompt</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What's the best class to grind LeetCode?"
                  {...field}
                  className="w-full md:w-[500px] resize-none overflow-hidden border-dark text-[16px]"
                  onInput={(e) => {
                    e.currentTarget.style.height = "auto";
                    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="temperature"
          render={({ field: { value, onChange } }) => (
            <FormItem className='hidden md:block'>
              <FormLabel className="text-lg">temperature: {value}</FormLabel>
              <FormControl>
                <Slider
                  min={0}
                  max={2}
                  step={0.01}
                  defaultValue={[value]}
                  onValueChange={(vals) => {
                    onChange(vals[0]);
                  }}
                  className="w-[500px]"
                />
              </FormControl>
              <FormDescription>ignore if you don't know what this means</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between w-full">
        <div className="w-7"/>
        <Button type="submit" className="bg-medium1 hover:bg-medium2 rounded-2xl">ask</Button>
        <UserButton/>
        </div>
      </form>
    </Form>
  )
}