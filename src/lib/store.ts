// useClaimFormStore.ts
import { create } from "zustand";

interface FormData {
  caseDescription: string;
  injuryCause: string;
  incidentDate: string;
  medicalTreatment: string;
  attorneyStatus: string;
  caseDetails: string;
  contactInfo: string;
}

interface ClaimFormState {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (field: keyof FormData, value: string) => void; // Type-safe field updates
}

export const useClaimFormStore = create<ClaimFormState>((set) => ({
  step: 0,
  formData: {
    caseDescription: "",
    injuryCause: "",
    incidentDate: "",
    medicalTreatment: "",
    attorneyStatus: "",
    caseDetails: "",
    contactInfo: "",
  },
  nextStep: () =>
    set((state) => ({
      step: state.step + 1,
    })),
  prevStep: () =>
    set((state) => ({
      step: state.step > 0 ? state.step - 1 : 0,
    })),
  updateFormData: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
}));
