import React from 'react';
import { EmergencyContact } from '../../types';
import { Card, CardBody } from '../ui/Card';
import { Phone, Globe, Clock } from 'lucide-react';

interface ContactCardProps {
  contact: EmergencyContact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <Card className="mb-4">
      <CardBody>
        <h3 className="text-lg font-medium text-gray-800 mb-1">{contact.name}</h3>
        <p className="text-gray-600 mb-4">{contact.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <Phone className="w-4 h-4 text-primary-500 mr-2" />
            <a 
              href={`tel:${contact.phone}`} 
              className="text-primary-600 hover:underline"
            >
              {contact.phone}
            </a>
          </div>
          
          {contact.website && (
            <div className="flex items-center">
              <Globe className="w-4 h-4 text-primary-500 mr-2" />
              <a 
                href={contact.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-600 hover:underline"
              >
                Website
              </a>
            </div>
          )}
          
          {contact.hours && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-primary-500 mr-2" />
              <span className="text-gray-600">{contact.hours}</span>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ContactCard;