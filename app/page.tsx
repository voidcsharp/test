'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertTriangle, Cable, Scissors, Wrench, Check, ChevronRight, ChevronLeft, Home, List, FileText } from "lucide-react"
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"

// Import the Blinker font
import { Blinker } from 'next/font/google'

// Initialize the font with required configuration
const blinker = Blinker({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-blinker'
})

const steps = [
  {
    title: "1. Prepare Materials",
    description: "Gather all necessary tools and materials",
    icon: <Wrench className="w-6 h-6" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Ubiquiti STP Tough Cable</li>
        <li>TrueCable Crimp Tool</li>
        <li>TrueCable Strip Tool</li>
        <li>RJ45 connectors (shielded)</li>
        <li>Wire cutters</li>
        <li>Cable tester (optional but recommended)</li>
      </ul>
    ),
    image: "https://content.instructables.com/FK9/LPLB/GZACIJ4R/FK9LPLBGZACIJ4R.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=MjAxMy0xMi0xNiAxMDowMjoyNy4w"
  },
  {
    title: "2. Measure and Cut",
    description: "Cut the cable to the required length",
    icon: <Scissors className="w-6 h-6" />,
    content: (
      <div>
        <p className="mb-2">Use wire cutters to cut the Ubiquiti STP Tough Cable to the desired length. Add a few extra inches to account for potential mistakes.</p>
        <div className="flex items-center text-yellow-500">
          <AlertTriangle className="w-5 h-5 mr-2" />
          <p className="text-sm">Ensure the cut is clean and perpendicular to the cable.</p>
        </div>
      </div>
    ),
    image: "https://content.instructables.com/FBY/7EPJ/GZACIJ65/FBY7EPJGZACIJ65.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=MjAxMy0xMi0xNiAxMDowMjozOC4w"
  },
  {
    title: "3. Strip Outer Jacket",
    description: "Use the TrueCable Strip Tool to remove the outer jacket",
    icon: <Cable className="w-6 h-6" />,
    content: (
      <div>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Insert the end of the cable into the TrueCable Strip Tool.</li>
          <li>Rotate the tool around the cable 2-3 times.</li>
          <li>Gently pull to remove the stripped outer jacket.</li>
        </ol>
        <div className="flex items-center text-yellow-500 mt-2">
          <AlertTriangle className="w-5 h-5 mr-2" />
          <p className="text-sm">Be careful not to nick the internal wires or foil shield.</p>
        </div>
      </div>
    ),
    image: "https://content.instructables.com/FE3/6N0X/GZACIJ6C/FE36N0XGZACIJ6C.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=MjAxMy0xMi0xNiAxMDowMjo0MS4w"
  },
  {
    title: "4. Prepare Wires",
    description: "Arrange and trim the internal wires",
    icon: <Wrench className="w-6 h-6" />,
    content: (
      <div>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Carefully separate the four twisted pairs of wires.</li>
          <li>Untwist each pair and arrange them according to the T568B standard:
            <ul className="list-disc pl-5 mt-1">
              <li>Orange-White, Orange, Green-White, Blue, Blue-White, Green, Brown-White, Brown</li>
            </ul>
          </li>
          <li>Trim the wires to ensure they're even and about 1/2 inch in length.</li>
        </ol>
      </div>
    ),
    image: "https://content.instructables.com/F71/MIL0/GZQR1ORK/F71MIL0GZQR1ORK.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=MjAxMy0xMi0xNiAxMTozNTo0Mi4w"
  },
  {
    title: "5. Insert into Connector",
    description: "Place the wires into the RJ45 connector",
    icon: <Cable className="w-6 h-6" />,
    content: (
      <div>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Carefully insert the arranged wires into the RJ45 connector.</li>
          <li>Ensure each wire goes into its corresponding channel all the way to the tip of the connector.</li>
          <li>The cable jacket should be inside the connector by about 1/4 inch.</li>
        </ol>
        <div className="flex items-center text-yellow-500 mt-2">
          <AlertTriangle className="w-5 h-5 mr-2" />
          <p className="text-sm">Double-check the wire order before crimping!</p>
        </div>
      </div>
    ),
    image: "https://content.instructables.com/F2S/01Y3/GZUAFA6Q/F2S01Y3GZUAFA6Q.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=MjAxMy0xMi0xNiAxMTo0NTowMS4w"
  },
  {
    title: "6. Crimp",
    description: "Use the TrueCable Crimp Tool to secure the connector",
    icon: <Wrench className="w-6 h-6" />,
    content: (
      <div>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Insert the connector with the cable into the TrueCable Crimp Tool.</li>
          <li>Firmly squeeze the handles of the crimp tool until it releases.</li>
          <li>This action will secure the connector onto the cable and push the contacts into the wires.</li>
        </ol>
        <div className="flex items-center text-green-500 mt-2">
          <Check className="w-5 h-5 mr-2" />
          <p className="text-sm">Ensure the crimp is complete and the connector is securely attached.</p>
        </div>
      </div>
    ),
    image: "https://content.instructables.com/FK2/1YRR/GZUAFQUR/FK21YRRGZUAFQUR.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=MjAxMi0wMy0xOSAxMDozMzowMC4w"
  },
  {
    title: "7. Test",
    description: "Verify the termination with a cable tester",
    icon: <Check className="w-6 h-6" />,
    content: (
      <div>
        <p className="mb-2">Use a cable tester to verify that all pairs are correctly terminated and there are no shorts or opens.</p>
        <div className="flex items-center text-green-500">
          <Check className="w-5 h-5 mr-2" />
          <p className="text-sm">A successful test ensures your cable is ready for use!</p>
        </div>
      </div>
    ),
    image: "https://cdn.shopify.com/s/files/1/0493/9834/9974/files/ethernet-cable-tester_480x480.jpg?v=1721810467"
  },
]

const tools = [
  {
    name: "Ubiquiti STP Tough Cable",
    description: "High-quality shielded twisted pair cable for reliable network connections.",
    link: "https://store.ui.com/collections/operator-accessories/products/tough-cable"
  },
  {
    name: "TrueCable Crimp Tool",
    description: "Precision crimping tool designed for consistent, reliable terminations.",
    link: "https://www.truecable.com/collections/tools/products/truecable-crimp-tool"
  },
  {
    name: "TrueCable Strip Tool",
    description: "Specialized tool for accurately stripping cable jackets without damaging internal wires.",
    link: "https://www.truecable.com/collections/tools/products/truecable-strip-tool"
  },
  {
    name: "RJ45 Connectors (Shielded)",
    description: "High-quality shielded connectors for terminating Ethernet cables.",
    link: "https://www.truecable.com/collections/connectors/products/truecable-cat6a-rj45-connectors-shielded"
  },
  {
    name: "Wire Cutters",
    description: "Precision cutting tool for cleanly trimming Ethernet cables.",
    link: "https://www.kleintools.com/catalog/high-leverage-cable-cutters/high-leverage-cable-cutter"
  },
  {
    name: "Cable Tester",
    description: "Device for verifying proper cable termination and connectivity.",
    link: "https://www.flukenetworks.com/datacom-cabling/copper-testing/MicroScanner-PoE-Cable-Verifier"
  }
]

const Summary = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-800">Summary of Cable Termination Process</h3>
    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
      {steps.map((step, index) => (
        <li key={index}>{step.title} - {step.description}</li>
      ))}
    </ol>
    <div className="mt-4">
      <h4 className="font-semibold text-gray-800">Important Notes:</h4>
      <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-700">
        <li>Always double-check wire order before crimping</li>
        <li>Ensure a clean cut when stripping the cable</li>
        <li>Test the cable after termination to verify proper functionality</li>
      </ul>
    </div>
  </div>
)

const Tools = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-gray-800">Required Tools and Materials</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tools.map((tool, index) => (
        <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">{tool.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-gray-600">{tool.description}</p>
            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Learn More / Purchase
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
)

export default function EnhancedSOPComponent() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  return (
    <div className={`min-h-screen bg-gray-100 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 ${blinker.className}`}>
      <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(76,175,80,0.5)] overflow-hidden">
      <header className="relative h-20 sm:h-32 flex justify-center items-center">
            <Image
              src="/images/back_swirls_with_WORDS.png"
              alt="SOP Banner"
              width={500}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </header>
          <div className="p-6 bg-gray-100 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-[#4caf50] mb-4 text-center">SOP: Ubiquiti Cable Termination</h1>          </div>
          <Tabs defaultValue="procedure" className="p-6">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 bg-gray-100 p-1 rounded-lg shadow-md">
              <TabsTrigger value="procedure" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <List className="mr-2 h-4 w-4" /> Procedure
              </TabsTrigger>
              <TabsTrigger value="summary" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <FileText className="mr-2 h-4 w-4" /> Summary
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Wrench className="mr-2 h-4 w-4" /> Tools
              </TabsTrigger>
            </TabsList>
            <TabsContent value="summary">
            <Card className="shadow-[0_0_10px_rgba(76,175,80,0.5)] border-t-4 border-[#4caf50]">
            <CardHeader className="bg-gray-50">
                  <CardTitle className="text-xl text-gray-800">Procedure Summary</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Summary />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tools">
              <Card className="mb-8 shadow-lg border-t-4 border-green-500">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-xl text-gray-800">Tools and Materials</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tools />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="procedure">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Button variant="outline" onClick={() => setCurrentStep(0)} className="w-full sm:w-auto">
                    <Home className="mr-2 h-4 w-4" /> Start
                  </Button>
                  <div className="text-sm font-medium text-gray-500">
                    Step {currentStep + 1} of {steps.length}
                  </div>
                </div>
                <Progress value={(currentStep / (steps.length - 1)) * 100} className="w-full" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="shadow-[0_0_10px_rgba(76,175,80,0.5)] border-t-4 border-[#4caf50]">

                      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 border-b">
                        <div className="mr-4 p-3 bg-blue-100 rounded-full mb-4 sm:mb-0">
                          {steps[currentStep].icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-800">{steps[currentStep].title}</CardTitle>
                          <CardDescription className="text-gray-600">{steps[currentStep].description}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="text-gray-700">{steps[currentStep].content}</div>
                          <div className="flex justify-center items-center">
                            <img src={steps[currentStep].image} alt={`Step ${currentStep + 1}`} className="max-w-full h-auto rounded-lg shadow-md" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
                <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
                  <Button onClick={prevStep} disabled={currentStep === 0} variant="outline" className="w-full sm:w-auto">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button onClick={nextStep} disabled={currentStep === steps.length - 1} className="w-full sm:w-auto bg-[#4caf50] hover:bg-[#3e8e41] text-white">
                  {currentStep === steps.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}