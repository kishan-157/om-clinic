import React, { useState } from 'react';
import { X, Check, RotateCcw, ShieldCheck, Download, AlertCircle, Save } from 'lucide-react';
import { BusinessConfig, DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onSaveConfig: (newConfig: BusinessConfig) => void;
  onResetDefaults: () => void;
}

export const ClinicConfigModal: React.FC<Props> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetDefaults
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<BusinessConfig>({ ...config });
  const [saveNotice, setSaveNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSaveNotice(true);
    setTimeout(() => {
      setSaveNotice(false);
      onClose();
    }, 1200);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'om-dental-clinic-config.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-neutral-950 border border-white/10 rounded-2xl shadow-2xl my-8 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Clinic Details Configuration"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-neutral-900/60">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Business Details & Source of Truth
              </h3>
              <p className="text-xs text-neutral-400">
                Google Maps Source: Om Dental Clinic, Nikol, Ahmedabad
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[70vh] overflow-y-auto text-xs">
          {/* Status info */}
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-2.5">
            <Check className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Verified Business Profile:</strong> Details are mapped from the public Google Maps listing at Panchratna Avenue, Nikol. You can edit any field below to customize the clinic details across the entire website.
            </span>
          </div>

          {/* Business Name */}
          <div className="space-y-1.5">
            <label className="font-semibold text-neutral-300 uppercase tracking-wider">
              Business Name
            </label>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Tagline & Subtitle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-semibold text-neutral-300 uppercase tracking-wider">
                Hero Tagline
              </label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-semibold text-neutral-300 uppercase tracking-wider">
                Phone Display
              </label>
              <input
                type="text"
                value={formData.phoneDisplay}
                onChange={(e) => setFormData({ ...formData, phoneDisplay: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* WhatsApp International Number */}
          <div className="space-y-1.5">
            <label className="font-semibold text-neutral-300 uppercase tracking-wider">
              WhatsApp International Digits (No + or spaces)
            </label>
            <input
              type="text"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value.replace(/\D/g, '') })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono focus:outline-none focus:border-amber-400"
            />
            <p className="text-[11px] text-neutral-400">
              Format: <code>919712396396</code> (91 for India + 10-digit number)
            </p>
          </div>

          {/* Address Fields */}
          <div className="space-y-3 pt-2 border-t border-white/5">
            <span className="font-bold text-white text-sm block">Address Details</span>
            <div className="space-y-1.5">
              <label className="text-neutral-400">Shop / Building</label>
              <input
                type="text"
                value={formData.address.line1}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, line1: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-neutral-400">Road / Landmark</label>
              <input
                type="text"
                value={formData.address.line2}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, line2: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-neutral-400">Area</label>
                <input
                  type="text"
                  value={formData.address.area}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, area: e.target.value }
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-neutral-400">Pincode</label>
                <input
                  type="text"
                  value={formData.address.pincode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, pincode: e.target.value }
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Google Maps URL */}
          <div className="space-y-1.5 pt-2 border-t border-white/5">
            <label className="font-semibold text-neutral-300 uppercase tracking-wider">
              Google Maps URL
            </label>
            <input
              type="url"
              value={formData.googleMapsUrl}
              onChange={(e) => setFormData({ ...formData, googleMapsUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs font-mono"
            />
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onResetDefaults}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Verified Defaults</span>
              </button>
              <button
                type="button"
                onClick={handleExportJson}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 text-neutral-300 hover:text-white text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>{saveNotice ? 'Saved!' : 'Save & Apply'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
