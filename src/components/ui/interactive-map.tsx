import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { MapPin, Settings } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
  type: 'outreach' | 'office' | 'partner';
  date?: string;
  beneficiaries?: number;
}

const InteractiveMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // Sample outreach locations
  const locations: Location[] = [
    {
      id: '1',
      name: 'Lagos Community Outreach',
      coordinates: [3.3792, 6.5244],
      description: 'Educational support program for underprivileged children',
      type: 'outreach',
      date: 'March 2024',
      beneficiaries: 150
    },
    {
      id: '2',
      name: 'Abuja Healthcare Initiative',
      coordinates: [7.3775, 9.0579],
      description: 'Free medical checkups and health education',
      type: 'outreach',
      date: 'April 2024',
      beneficiaries: 200
    },
    {
      id: '3',
      name: 'Kano Skills Development Center',
      coordinates: [8.5162, 12.0022],
      description: 'Vocational training for youth empowerment',
      type: 'outreach',
      date: 'May 2024',
      beneficiaries: 80
    },
    {
      id: '4',
      name: 'Diamond Foundation HQ',
      coordinates: [3.3792, 6.5244],
      description: 'Our main office in Lagos',
      type: 'office'
    }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe' as any,
      zoom: 5,
      center: [8, 9], // Center on Nigeria
      pitch: 30,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });

      // Add markers for each location
      locations.forEach((location) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${location.type === 'office' ? '%234f46e5' : '%2310b981'}" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>')`;
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.backgroundSize = 'contain';
        el.style.cursor = 'pointer';

        // Add click event to show location details
        el.addEventListener('click', () => {
          setSelectedLocation(location);
        });

        new mapboxgl.Marker(el)
          .setLngLat(location.coordinates)
          .addTo(map.current!);
      });
    });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox-token', mapboxToken);
      setShowTokenInput(false);
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
      initializeMap(savedToken);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <Card className="p-6 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Setup Required</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            To display the interactive map, please provide your Mapbox public token.
            You can get one for free at{' '}
            <a 
              href="https://mapbox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <div className="space-y-2">
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="pk.eyJ1..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
            />
          </div>
          <Button onClick={handleTokenSubmit} className="w-full">
            Initialize Map
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Location details panel */}
      {selectedLocation && (
        <Card className="absolute top-4 left-4 p-4 max-w-xs z-10 bg-white/95 backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-sm">{selectedLocation.name}</h4>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedLocation(null)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {selectedLocation.description}
            </p>
            {selectedLocation.date && (
              <p className="text-xs">
                <span className="font-medium">Date:</span> {selectedLocation.date}
              </p>
            )}
            {selectedLocation.beneficiaries && (
              <p className="text-xs">
                <span className="font-medium">Beneficiaries:</span> {selectedLocation.beneficiaries}
              </p>
            )}
          </div>
        </Card>
      )}

      {/* Reset token button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          localStorage.removeItem('mapbox-token');
          setShowTokenInput(true);
          map.current?.remove();
        }}
        className="absolute bottom-4 right-4 z-10"
      >
        <Settings className="h-4 w-4 mr-1" />
        Reset Token
      </Button>
    </div>
  );
};

export default InteractiveMap;