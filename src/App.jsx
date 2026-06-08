import { useMemo, useState } from 'react'
import { LANGUAGES, ui, getProviders } from './i18n'
import './App.css'

const lastUpdated = new Date().toLocaleDateString('en-CA')

function App() {
  const [lang, setLang] = useState('en')
  const [query, setQuery] = useState('')
  const [expandedKey, setExpandedKey] = useState(null)

  const t = ui[lang]
  const providers = useMemo(() => getProviders(lang), [lang])

  const filteredProviders = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return providers
    }

    return providers.filter((provider) => {
      return (
        provider.name.toLowerCase().includes(normalizedQuery) ||
        provider.id.toLowerCase().includes(normalizedQuery) ||
        provider.city.toLowerCase().includes(normalizedQuery) ||
        provider.activity.toLowerCase().includes(normalizedQuery) ||
        provider.productDescription.toLowerCase().includes(normalizedQuery) ||
        provider.certificationDescription.toLowerCase().includes(normalizedQuery) ||
        provider.certificationForm.toLowerCase().includes(normalizedQuery) ||
        provider.certificationNumber.toLowerCase().includes(normalizedQuery) ||
        provider.certificationStartDate.toLowerCase().includes(normalizedQuery)
      )
    })
  }, [query, providers])

  return (
    <main className="app-shell">
      <a
        href="https://favv-afsca.be/nl/open-data"
        target="_blank"
        rel="noopener noreferrer"
        className="app-branding"
        title="Visit FAVV website"
      >
        <img
          src="/favv-logo--nl.svg"
          alt="FAVV Logo"
          className="favv-logo"
        />
        <span className="branding-text">Powered by FAVV Open Data</span>
      </a>

      <div className="app-header">
        <section className="intro-card">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.heading}</h1>
          <p className="intro-copy">{t.introCopy}</p>
          <label className="search-wrap" htmlFor="provider-search">
            <span className="search-label">{t.searchLabel}</span>
            <input
              id="provider-search"
              name="provider-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchPlaceholder}
              autoComplete="off"
            />
          </label>
        </section>

        <div className="language-switcher">
          {LANGUAGES.map((langCode) => (
            <button
              key={langCode}
              className={`lang-btn${lang === langCode ? ' lang-btn--active' : ''}`}
              onClick={() => setLang(langCode)}
              aria-current={lang === langCode ? 'true' : undefined}
              title={`Switch to ${langCode.toUpperCase()}`}
            >
              {langCode.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <section className="results-section" aria-live="polite">
        <div className="results-meta">
          <p>{t.resultsFound(filteredProviders.length)}</p>
        </div>

        {filteredProviders.length > 0 ? (
          <ul className="results-grid">
            {filteredProviders.map((provider) => {
              const cardKey = `${provider.id}-${provider.name}-${provider.city}`
              return (
                <ProviderCard
                  key={cardKey}
                  provider={provider}
                  expanded={expandedKey === cardKey}
                  onToggle={() =>
                    setExpandedKey((prev) => (prev === cardKey ? null : cardKey))
                  }
                  t={t}
                />
              )
            })}
          </ul>
        ) : (
          <div className="empty-state">
            <h2>{t.noResults}</h2>
            <p>{t.noResultsHint}</p>
          </div>
        )}
      </section>
    </main>
  )
}

function ProviderCard({ provider, expanded, onToggle, t }) {
  return (
    <li className={`provider-card${expanded ? ' provider-card--expanded' : ''}`}>
      <div className="provider-card-summary">
        <div className="provider-card-summary-text">
          <p className="provider-id">{provider.certificationNumber}</p>
          <h2>{provider.name}</h2>
          <p>
            <span className="prop-label">{t.props.city}</span> {provider.city}
          </p>
          <p>
            <span className="prop-label">{t.props.activity}</span>{' '}
            {provider.activity}
          </p>
        </div>
        <button
          className="provider-card-toggle"
          aria-expanded={expanded}
          aria-label={expanded ? t.collapseLabel : t.expandLabel}
          onClick={onToggle}
        >
          <span className="provider-card-toggle-icon" aria-hidden="true" />
        </button>
      </div>

      {expanded && (
        <div className="provider-card-details">
          <p>
            <span className="prop-label">{t.props.activityDescription}</span>{' '}
            {provider.activityDescription}
          </p>
          <p>
            <span className="prop-label">{t.props.productDescription}</span>{' '}
            {provider.productDescription}
          </p>
          <p>
            <span className="prop-label">
              {t.props.certificationDescription}
            </span>{' '}
            {provider.certificationDescription}
          </p>
          <p>
            <span className="prop-label">{t.props.certificationForm}</span>{' '}
            {provider.certificationForm}
          </p>
          <p>
            <span className="prop-label">{t.props.certificationStartDate}</span>{' '}
            {provider.certificationStartDate}
          </p>
          <p>
            <span className="prop-label">{t.props.lastUpdated}</span>{' '}
            {lastUpdated}
          </p>
        </div>
      )}
    </li>
  )
}

export default App
