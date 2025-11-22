
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import TaskBitesPrivacy from "./pages/TaskBitesPrivacy";
import FlowTimePrivacy from "./pages/FlowTimePrivacy";
import ScanMePrivacy from "./pages/ScanMePrivacy";
import ScanMeIOSPrivacy from "./pages/ScanMeIOSPrivacy";
import CheckersPrivacy from "./pages/CheckersPrivacy";
import CheckersPrivacyAlt from "./pages/CheckersPrivacyAlt";
import CleanUpGuruPrivacy from "./pages/CleanUpGuruPrivacy";
import FitStepsPrivacy from "./pages/FitStepsPrivacy";
import ScanMeProPrivacy from "./pages/ScanMeProPrivacy";
import TravelMatePrivacy from "./pages/TravelMatePrivacy";
import PDFStudioScannerPrivacy from "./pages/PDFStudioScannerPrivacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/taskbites-privacy" element={<TaskBitesPrivacy />} />
          <Route path="/flowtime-privacy" element={<FlowTimePrivacy />} />
          <Route path="/scanme-privacy" element={<ScanMePrivacy />} />
          <Route path="/scanme-ios-privacy" element={<ScanMeIOSPrivacy />} />
          <Route path="/checkers-privacy" element={<CheckersPrivacy />} />
          <Route path="/checkers-privacy-alt" element={<CheckersPrivacyAlt />} />
          <Route path="/cleanup-guru-privacy" element={<CleanUpGuruPrivacy />} />
          <Route path="/fitsteps-privacy" element={<FitStepsPrivacy />} />
          <Route path="/scanme-pro-privacy" element={<ScanMeProPrivacy />} />
          <Route path="/travelmate-privacy" element={<TravelMatePrivacy />} />
          <Route path="/pdf-studio-scanner-privacy" element={<PDFStudioScannerPrivacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
