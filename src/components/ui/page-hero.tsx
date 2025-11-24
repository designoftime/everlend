import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
  backgroundImage?: string;
}

export function PageHero({ title, description, className, backgroundImage }: PageHeroProps) {
  return (
    <div className={cn("relative bg-everlend-green py-20 md:py-32 overflow-hidden", className)}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-0" />
      <Container className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
