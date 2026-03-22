import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Biografia from "./pages/Biografia";
import Opere from "./pages/Opere";
import Poesie from "./pages/Poesie";
import Eventi from "./pages/Eventi";
import Media from "./pages/Media";
import Contatti from "./pages/Contatti";
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
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/opere" element={<Opere />} />
          <Route path="/poesie" element={<Poesie />} />
          <Route path="/eventi" element={<Eventi />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
