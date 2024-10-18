import type { Struct, Schema } from '@strapi/strapi';

export interface SkilsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skils_skills';
  info: {
    displayName: 'Skills';
    icon: 'pencil';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    workSummary: Schema.Attribute.RichText;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
    icon: 'book';
    description: '';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'skils.skills': SkilsSkills;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
    }
  }
}
