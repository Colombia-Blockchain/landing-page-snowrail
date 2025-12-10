export interface DocSection {
  id: string;
  title: string;
  subsections?: DocSection[];
}

export interface CodeExample {
  language: string;
  code: string;
  label?: string;
}

export interface EndpointDef {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  requestBody?: CodeExample;
  responseBody?: CodeExample;
  errorResponse?: CodeExample;
}

