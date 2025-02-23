"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2, Send } from "lucide-react"
import { motion } from "framer-motion"
import { getApiKey } from '@/config/api';

export default function ChatBot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
  })

  const handleSendMessage = async () => {
    const API_KEY = getApiKey();
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages,
          apiKey: API_KEY
        })
      });
      // ...rest of your code...
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-green-800">Chat with our Farming Expert</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            {messages.map((m, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block p-3 rounded-lg ${
                    m.role === "user" ? "bg-green-200 text-green-800" : "bg-brown-100 text-brown-800"
                  }`}
                >
                  {m.content}
                </span>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-center items-center">
                <Loader2 className="h-6 w-6 animate-spin text-green-500" />
              </div>
            )}
            {error && <div className="text-center text-red-500">An error occurred. Please try again.</div>}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="flex w-full space-x-2">
            <Input
              value={input}
              placeholder="Ask about farming..."
              onChange={handleInputChange}
              className="flex-grow"
            />
            <Button type="submit" disabled={isLoading}>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </form>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

