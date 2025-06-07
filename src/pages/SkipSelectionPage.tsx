import React, { useState, useEffect } from 'react';
import { Truck, MapPin } from 'lucide-react';
import { Skip, RawSkipApiData } from '../types/skip';
import SkipCard from '../components/SkipCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import SelectionSummary from '../components/SelectionSummary';
import DarkModeToggle from '../components/DarkModeToggle';

const SkipSelectionPage: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkipId, setSelectedSkipId] = useState<string | null>(null);

  const calculateFinalPrice = (priceBeforeVat: number, vat: number): number => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  const formatPeriod = (days: number): string => {
    if (days === 7) return 'week';
    if (days === 14) return '2 weeks';
    if (days === 21) return '3 weeks';
    if (days === 28) return '4 weeks';
    return `${days} days`;
  };

  const generateDescription = (size: number, allowedOnRoad: boolean, allowsHeavyWaste: boolean): string => {
    let description = `Perfect for ${size} yard capacity projects. `;
    
    if (allowedOnRoad) {
      description += 'Can be placed on road with permit. ';
    } else {
      description += 'Must be placed on private property. ';
    }
    
    if (allowsHeavyWaste) {
      description += 'Suitable for heavy construction waste.';
    } else {
      description += 'Ideal for general household and light construction waste.';
    }
    
    return description;
  };

  const generateCapacity = (size: number): string => {
    const bagsPerYard = 10;
    const totalBags = size * bagsPerYard;
    return `${totalBags}-${totalBags + 20} bin bags`;
  };

  const fetchSkips = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch skip information');
      }
      
      const rawSkips: RawSkipApiData[] = await response.json();
      
      if (Array.isArray(rawSkips) && rawSkips.length > 0) {
        // Transform the raw API data to match our Skip interface
        const transformedSkips: Skip[] = rawSkips.map((rawSkip) => ({
          id: rawSkip.id.toString(),
          size: rawSkip.size.toString(),
          price: calculateFinalPrice(rawSkip.price_before_vat, rawSkip.vat),
          period: formatPeriod(rawSkip.hire_period_days),
          description: generateDescription(rawSkip.size, rawSkip.allowed_on_road, rawSkip.allows_heavy_waste),
          capacity: generateCapacity(rawSkip.size)
        }));
        
        setSkips(transformedSkips);
      } else {
        throw new Error('No skip data available');
      }
    } catch (err) {
      console.error('Error fetching skips:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
      
      // Fallback data for demonstration
      const fallbackSkips: Skip[] = [
        {
          id: 'skip-4',
          size: '4',
          price: 165,
          period: 'week',
          description: 'Perfect for small home clearances and garden waste',
          capacity: '30-40 bin bags'
        },
        {
          id: 'skip-6',
          size: '6',
          price: 185,
          period: 'week',
          description: 'Ideal for bathroom renovations and small construction projects',
          capacity: '50-60 bin bags'
        },
        {
          id: 'skip-8',
          size: '8',
          price: 205,
          period: 'week',
          description: 'Great for kitchen renovations and medium construction waste',
          capacity: '70-80 bin bags'
        },
        {
          id: 'skip-12',
          size: '12',
          price: 245,
          period: 'week',
          description: 'Perfect for large house clearances and major renovations',
          capacity: '100-120 bin bags'
        },
        {
          id: 'skip-16',
          size: '16',
          price: 285,
          period: 'week',
          description: 'Ideal for commercial projects and large construction sites',
          capacity: '140-160 bin bags'
        },
        {
          id: 'skip-20',
          size: '20',
          price: 325,
          period: 'week',
          description: 'Best for major commercial waste and large-scale projects',
          capacity: '180-200 bin bags'
        }
      ];
      setSkips(fallbackSkips);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkips();
  }, []);

  const handleSkipSelect = (skipId: string) => {
    setSelectedSkipId(selectedSkipId === skipId ? null : skipId);
  };

  const handleContinue = () => {
    const selectedSkip = skips.find(skip => skip.id === selectedSkipId);
    if (selectedSkip) {
      alert(`You selected: ${selectedSkip.size} Yard Skip for £${selectedSkip.price}/${selectedSkip.period}`);
    }
  };

  const selectedSkip = skips.find(skip => skip.id === selectedSkipId) || null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Truck className="text-white" size={32} aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Choose Your Skip Size</h1>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
                  <MapPin size={16} aria-hidden="true" />
                  <span>Lowestoft, NR32</span>
                </div>
              </div>
            </div>
            <DarkModeToggle />
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Select the perfect skip size for your project. All prices include delivery, collection, 
            and disposal of general household and construction waste.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && <LoadingSkeleton />}
        
        {error && !loading && (
          <ErrorMessage message={error} onRetry={fetchSkips} />
        )}
        
        {!loading && skips.length > 0 && (
          <section aria-label="Available skip sizes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSkipId === skip.id}
                  onSelect={handleSkipSelect}
                />
              ))}
            </div>
          </section>
        )}
        
        {!loading && skips.length === 0 && (
          <div className="text-center py-12" role="status">
            <p className="text-gray-600 dark:text-gray-400">No skips available for your location.</p>
          </div>
        )}
      </main>

      {/* Selection Summary */}
      <SelectionSummary 
        selectedSkip={selectedSkip} 
        onContinue={handleContinue}
      />
      
      {/* Bottom padding for sticky summary */}
      {selectedSkip && <div className="h-24\" aria-hidden="true"></div>}
    </div>
  );
};

export default SkipSelectionPage;