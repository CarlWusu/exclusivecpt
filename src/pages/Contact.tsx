import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl leading-relaxed opacity-90 animate-fade-in">
            Have questions? Want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="font-heading text-3xl font-bold mb-8 text-foreground">
                Send us a <span className="text-gold">Message</span>
              </h2>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-border focus:ring-gold focus:border-gold"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-border focus:ring-gold focus:border-gold"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-border focus:ring-gold focus:border-gold"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-border focus:ring-gold focus:border-gold"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold"
                    >
                      SEND MESSAGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="font-heading text-3xl font-bold mb-8 text-foreground">
                Let's <span className="text-gold">Connect</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@exclusive.gh</p>
                    <p className="text-muted-foreground">support@exclusive.gh</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+233 50 123 4567</p>
                    <p className="text-muted-foreground">Mon-Fri, 9AM-6PM GMT</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Oxford Street</p>
                    <p className="text-muted-foreground">Osu, Accra, Ghana</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
                  Follow <span className="text-gold">@Exclusive</span>
                </h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-gold hover:text-gold-foreground hover:border-gold">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-gold hover:text-gold-foreground hover:border-gold">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-gold hover:text-gold-foreground hover:border-gold">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-muted">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Our Location</h3>
            <p className="text-muted-foreground">123 Oxford Street, Osu, Accra, Ghana</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;