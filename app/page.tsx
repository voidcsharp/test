'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, Cable, Scissors, Wrench, Check, ChevronRight, ChevronLeft, Home, List, FileText } from "lucide-react";

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
    image: "/api/placeholder/400/300"
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
    )
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
    )
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
    )
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
    )
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
    )
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
    )
  }
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
];

const Summary = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Summary of Cable Termination Process</h3>
    <ol className="list-decimal pl-5 space-y-2">
      {steps.map((step, index) => (
        <li key={index}>{step.title} - {step.description}</li>
      ))}
    </ol>
    <div className="mt-4">
      <h4 className="font-semibold">Important Notes:</h4>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Always double-check wire order before crimping</li>
        <li>Ensure a clean cut when stripping the cable</li>
        <li>Test the cable after termination to verify proper functionality</li>
      </ul>
    </div>
  </div>
);

const Tools = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold">Required Tools and Materials</h3>
    {tools.map((tool, index) => (
      <Card key={index} className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg text-blue-800">{tool.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">{tool.description}</p>
          <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Learn More / Purchase
          </a>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default function EnhancedSOPComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState("procedure");

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <header className="bg-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">SOP: Ubiquiti Cable Termination</h1>
          <p className="mt-2 text-blue-100">Standard Operating Procedure for terminating Ubiquiti STP Tough Cable</p>
        </header>

        <div className="p-6">
          <div className="flex flex-wrap justify-between mb-6 gap-4">
            <Button 
              variant={activeTab === "procedure" ? "default" : "outline"} 
              onClick={() => setActiveTab("procedure")}
              className="flex-1 sm:flex-none"
            >
              <List className="mr-2 h-4 w-4" /> Procedure
            </Button>
            <Button 
              variant={activeTab === "summary" ? "default" : "outline"} 
              onClick={() => setActiveTab("summary")}
              className="flex-1 sm:flex-none"
            >
              <FileText className="mr-2 h-4 w-4" /> Summary
            </Button>
            <Button 
              variant={activeTab === "tools" ? "default" : "outline"} 
              onClick={() => setActiveTab("tools")}
              className="flex-1 sm:flex-none"
            >
             
            </Button>
          </div>

          {activeTab === "summary" && (
            <Card className="mb-8 shadow-lg border-t-4 border-t-blue-600">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-xl text-blue-800">Procedure Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Summary />
              </CardContent>
            </Card>
          )}

          {activeTab === "tools" && (
            <Card className="mb-8 shadow-lg border-t-4 border-t-blue-600">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-xl text-blue-800">Tools and Materials</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Tools />
              </CardContent>
            </Card>
          )}

          {activeTab === "procedure" && (
            <>
              <nav className="flex flex-wrap justify-between items-center mb-6 gap-4">
                <Button variant="outline" onClick={() => setCurrentStep(0)} className="flex-1 sm:flex-none">
                  <Home className="mr-2 h-4 w-4" /> Start
                </Button>
                <div className="text-sm font-medium text-gray-500 w-full sm:w-auto text-center">
                  Step {currentStep + 1} of {steps.length}
                </div>
              </nav>

              <Progress value={(currentStep / (steps.length - 1)) * 100} className="mb-8" />

              <Card className="mb-8 shadow-lg border-t-4 border-t-blue-600">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 border-b">
                  <div className="mr-4 p-3 bg-blue-100 rounded-full mb-4 sm:mb-0">
                    {steps[currentStep].icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-800">{steps[currentStep].title}</CardTitle>
                    <CardDescription className="text-gray-600">{steps[currentStep].description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>{steps[currentStep].content}</div>
                    <div className="flex justify-center items-center">
                      <img src={steps[currentStep].image} alt={`Step ${currentStep + 1}`} className="max-w-full h-auto rounded-lg shadow-md" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap justify-between mt-8 gap-4">
                <Button onClick={prevStep} disabled={currentStep === 0} variant="outline" className="flex-1 sm:flex-none">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button onClick={nextStep} disabled={currentStep === steps.length - 1} className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700">
                  {currentStep === steps.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}