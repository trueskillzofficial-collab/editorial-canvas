import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import Biografia from "./pages/Biografia";
import Opere from "./pages/Opere";
import Poesie from "./pages/Poesie";
import Eventi from "./pages/Eventi";
import Media from "./pages/Media";
import Contatti from "./pages/Contatti";
import Recensioni from "./pages/Recensioni";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/opere" element={<Opere />} />
          <Route path="/poesie" element={<Poesie />} />
          <Route path="/eventi" element={<Eventi />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/recensioni" element={<Recensioni />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
