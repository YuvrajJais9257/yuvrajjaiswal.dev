import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HyphenViewPreview from "./pages/projects/HyphenViewPreview";
import ReportingConsolePreview from "./pages/projects/ReportingConsolePreview";
import InventoryManagementPreview from "./pages/projects/InventoryManagementPreview";
import HyphenDeskPreview from "./pages/projects/HyphenDeskPreview";
import SmartJobHunterPreview from "./pages/projects/SmartJobHunterPreview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/hyphenview" element={<HyphenViewPreview />} />
          <Route path="/projects/reporting-console" element={<ReportingConsolePreview />} />
          <Route path="/projects/inventory-management" element={<InventoryManagementPreview />} />
          <Route path="/projects/hyphendesk" element={<HyphenDeskPreview />} />
          <Route path="/projects/smart-job-hunter" element={<SmartJobHunterPreview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
