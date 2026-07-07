export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  expertise: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  image: string;
}

export interface TimelineItem {
  year: string;
  title: string;
}

export interface InfraItem {
  name: string;
  specs: string;
}

export interface Client {
  name: string;
  logo?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  requirement: string;
  message: string;
}
