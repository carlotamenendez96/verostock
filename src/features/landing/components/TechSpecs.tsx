import React from 'react';
import { useTranslation } from 'react-i18next';

const TechSpecs: React.FC = () => {
  const { t } = useTranslation('landing');
  const specs = [
    { labelKey: 'techSpecs.connectivity' as const, valueKey: 'techSpecs.value5g' as const },
    { labelKey: 'techSpecs.installation' as const, valueKey: 'techSpecs.valuePlugPlay' as const },
    { labelKey: 'techSpecs.infrastructure' as const, valueKey: 'techSpecs.valueCloudSync' as const },
    { labelKey: 'techSpecs.integration' as const, valueKey: 'techSpecs.valueApi' as const },
  ];

  return (
    <section className="bg-background-dark py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {specs.map((spec, i) => (
            <div key={i} className="text-center group">
              <p className="text-white/40 font-mono text-[10px] mb-3 uppercase tracking-[0.2em]">{t(spec.labelKey)}</p>
              <p className="text-white font-bold text-lg group-hover:text-primary transition-colors">{t(spec.valueKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
