export interface Citation {
  text: string;
  url: string;
}

export interface AssessmentSection {
  id: string;
  title: string;
  icon: JSX.Element;
  question: string;
  inputType: string;
  placeholder: string;
  source: string;
  citations: Citation[];
}