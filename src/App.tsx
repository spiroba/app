
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
import CleanUpGuruPrivacy from "./pages/CleanUpGuruPrivacy";
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
          <Route path="/cleanup-guru-privacy" element={<CleanUpGuruPrivacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
