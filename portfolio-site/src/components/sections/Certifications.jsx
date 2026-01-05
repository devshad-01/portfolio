import { ExternalLink, Award, Calendar, ShieldCheck } from 'lucide-react';
import { useCertifications } from '../../hooks/usePortfolioData';

const Certifications = () => {
  const { data: certifications } = useCertifications();

  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const isExpired = (expiryDate) => {
    if (!expiryDate) return false;
    return new Date(expiryDate) < new Date();
  };

  // Icon mapping for known issuers
  const issuerIcons = {
    'Amazon Web Services': '☁️',
    'Docker Inc.': '🐳',
    'Cloud Native Computing Foundation': '☸️',
    'GitHub': '🐙',
    'Google': '🔷',
    'Microsoft': '🟦',
  };

  return (
    <section className="py-section bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent-primary uppercase tracking-wider">
            Professional Credentials
          </span>
          <h2 className="text-h1-mobile md:text-h1 font-bold text-light-text dark:text-dark-text mt-2">
            Certifications
          </h2>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mt-3 max-w-xl mx-auto">
            Industry-recognized certifications that validate my expertise in modern technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => {
            const expired = isExpired(cert.expiryDate);
            const icon = issuerIcons[cert.issuer] || '🏆';

            return (
              <div
                key={cert.id}
                className={`group relative p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border transition-all duration-300 ${
                  expired
                    ? 'border-light-border/50 dark:border-dark-border/50 opacity-75'
                    : 'border-light-border dark:border-dark-border hover:border-accent-primary/50'
                }`}
              >
                {/* Active badge */}
                {!expired && cert.expiryDate && (
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-status-success text-white text-xs font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Active
                  </div>
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-3xl flex-shrink-0">
                    {icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-light-text dark:text-dark-text group-hover:text-accent-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">
                      {cert.issuer}
                    </p>

                    {/* Dates */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs text-light-text-muted dark:text-dark-text-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Issued: {formatDate(cert.date)}</span>
                      </div>
                      {cert.expiryDate && (
                        <div className="flex items-center gap-1">
                          <span className={expired ? 'text-status-error' : ''}>
                            {expired ? 'Expired:' : 'Expires:'} {formatDate(cert.expiryDate)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Credential ID */}
                    {cert.credentialId && (
                      <p className="mt-2 text-xs text-light-text-muted dark:text-dark-text-muted font-mono">
                        ID: {cert.credentialId}
                      </p>
                    )}

                    {/* Verify link */}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-accent-primary hover:underline"
                      >
                        <Award className="w-4 h-4" />
                        Verify Credential
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
