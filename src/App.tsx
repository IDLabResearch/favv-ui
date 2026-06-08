import { useEffect, useMemo, useRef, useState } from 'react'
import { LANGUAGES, getProviders, ui } from './i18n'
import type { Language, Provider, UiLocale } from './i18n'
import './App.css'

const lastUpdated = new Date().toLocaleDateString('en-CA')
const STREAM_INTERVAL_MS = 5000
const STREAM_LIMIT = 10

type ActiveTab = 'search' | 'changes'
type StreamField =
  | 'city'
  | 'activity'
  | 'certificationForm'
  | 'productDescription'

type ChangeEvent = {
  id: string
  entityName: string
  certificationNumber: string
  postcode: string
  city: string
  province: string
  activity: string
  activityDescription: string
  productDescription: string
  certificationDescription: string
  certificationStartDate: string
  status: string
  field: StreamField
  fromValue: string
  toValue: string
  timestamp: string
}

type ProviderSnapshot = {
  city: string
  activity: string
  certificationForm: string
  productDescription: string
}

function createProviderSnapshots(providers: Provider[]) {
  const snapshots: Record<string, ProviderSnapshot> = {}

  for (const provider of providers) {
    snapshots[provider.id] = {
      city: provider.city,
      activity: provider.activity,
      certificationForm: provider.certificationForm,
      productDescription: provider.productDescription,
    }
  }

  return snapshots
}

function createMockChangeEvent(
  providers: Provider[],
  cursor: number,
  snapshots: Record<string, ProviderSnapshot>,
): Promise<ChangeEvent> {
  const sampleProvider = providers[cursor % providers.length]
  const fields: StreamField[] = [
    'activity',
    'city',
    'certificationForm',
    'productDescription',
  ]
  const field = fields[cursor % fields.length]
  const providerSnapshot = snapshots[sampleProvider.id]
  const alternateProvider = providers[(cursor + 1) % providers.length]
  const fromValue =
    providerSnapshot[field] === sampleProvider[field]
      ? alternateProvider[field]
      : providerSnapshot[field]

  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        entityName: sampleProvider.name,
        certificationNumber: sampleProvider.certificationNumber,
        postcode: sampleProvider.postcode,
        city: sampleProvider.city,
        province: sampleProvider.province,
        activity: sampleProvider.activity,
        activityDescription: sampleProvider.activityDescription,
        productDescription: sampleProvider.productDescription,
        certificationDescription: sampleProvider.certificationDescription,
        certificationStartDate: sampleProvider.certificationStartDate,
        status: sampleProvider.certificationForm,
        field,
        fromValue,
        toValue: sampleProvider[field],
        timestamp: new Date().toISOString(),
      })

      snapshots[sampleProvider.id][field] = sampleProvider[field]
    }, 220)
  })
}

function getStreamFieldLabel(field: StreamField, t: UiLocale) {
  switch (field) {
    case 'city':
      return t.props.city
    case 'activity':
      return t.props.activity
    case 'certificationForm':
      return t.props.certificationForm
    case 'productDescription':
      return t.props.productDescription
  }
}

function App() {
  const [lang, setLang] = useState<Language>('en')
  const [activeTab, setActiveTab] = useState<ActiveTab>('search')
  const [query, setQuery] = useState('')
  const [expandedKey, setExpandedKey] = useState<string | null>(null)
  const [changeEvents, setChangeEvents] = useState<ChangeEvent[]>([])
  const streamCursorRef = useRef(0)
  const streamSnapshotsRef = useRef<Record<string, ProviderSnapshot>>({})

  const t = ui[lang]
  const providers = useMemo(() => getProviders(lang), [lang])
  const isStreamBooting = activeTab === 'changes' && changeEvents.length === 0

  useEffect(() => {
    streamCursorRef.current = 0
    streamSnapshotsRef.current = createProviderSnapshots(providers)
  }, [providers])

  const filteredProviders = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return providers
    }

    return providers.filter((provider) => {
      return (
        provider.name.toLowerCase().includes(normalizedQuery) ||
        provider.id.toLowerCase().includes(normalizedQuery) ||
        provider.postcode.toLowerCase().includes(normalizedQuery) ||
        provider.city.toLowerCase().includes(normalizedQuery) ||
        provider.province.toLowerCase().includes(normalizedQuery) ||
        provider.activity.toLowerCase().includes(normalizedQuery) ||
        provider.productDescription.toLowerCase().includes(normalizedQuery) ||
        provider.certificationDescription.toLowerCase().includes(normalizedQuery) ||
        provider.certificationForm.toLowerCase().includes(normalizedQuery) ||
        provider.certificationNumber.toLowerCase().includes(normalizedQuery) ||
        provider.certificationStartDate.toLowerCase().includes(normalizedQuery)
      )
    })
  }, [query, providers])

  useEffect(() => {
    if (activeTab !== 'changes') {
      return
    }

    let disposed = false

    const pump = async () => {
      const nextEvent = await createMockChangeEvent(
        providers,
        streamCursorRef.current,
        streamSnapshotsRef.current,
      )
      if (disposed) {
        return
      }

      streamCursorRef.current += 1
      setChangeEvents((prev) => [nextEvent, ...prev].slice(0, STREAM_LIMIT))
    }

    void pump()
    const intervalId = window.setInterval(() => {
      void pump()
    }, STREAM_INTERVAL_MS)

    return () => {
      disposed = true
      window.clearInterval(intervalId)
    }
  }, [activeTab, providers])

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
          <p className="intro-copy">
            {activeTab === 'search' ? t.introCopy : t.stream.subtitle}
          </p>

          <nav className="view-tabs" aria-label={t.tabs.ariaLabel}>
            <button
              type="button"
              className={`view-tab${activeTab === 'search' ? ' view-tab--active' : ''}`}
              onClick={() => {
                setExpandedKey(null)
                setActiveTab('search')
              }}
              aria-pressed={activeTab === 'search'}
            >
              {t.tabs.search}
            </button>
            <button
              type="button"
              className={`view-tab${activeTab === 'changes' ? ' view-tab--active' : ''}`}
              onClick={() => setActiveTab('changes')}
              aria-pressed={activeTab === 'changes'}
            >
              {t.tabs.changes}
            </button>
          </nav>

          {activeTab === 'search' ? (
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
          ) : null}
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

      {activeTab === 'search' ? (
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
                      setExpandedKey((prev) =>
                        prev === cardKey ? null : cardKey,
                      )
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
      ) : (
        <section className="stream-section" aria-live="polite">
          <div className="stream-meta">
            <h2>{t.stream.title}</h2>
            <p>{t.stream.liveHint}</p>
          </div>

          {isStreamBooting && changeEvents.length === 0 ? (
            <div className="empty-state">
              <h2>{t.stream.loadingTitle}</h2>
              <p>{t.stream.loadingHint}</p>
            </div>
          ) : (
            <ul className="stream-list">
              {changeEvents.map((event) => (
                <li key={event.id} className="stream-item">
                  <div className="stream-item-top">
                    <span className="stream-badge stream-badge--status">
                      {event.status}
                    </span>
                    <time>{new Date(event.timestamp).toLocaleString(lang)}</time>
                  </div>
                  <p className="stream-entity-name">{event.entityName}</p>
                  <p className="stream-provider-id">{event.certificationNumber}</p>
                  <p>
                    <span className="prop-label">{t.props.postcode}</span>{' '}
                    {event.postcode}
                  </p>
                  <p>
                    <span className="prop-label">{t.props.city}</span>{' '}
                    {event.city}
                  </p>
                  <p>
                    <span className="prop-label">{t.props.province}</span>{' '}
                    {event.province}
                  </p>
                  <p>
                    <span className="prop-label">{t.props.activity}</span>{' '}
                    {event.activity}
                  </p>
                  <p>
                    <span className="prop-label">{t.props.certificationForm}</span>{' '}
                    {event.status}
                  </p>
                  <p>
                    <span className="prop-label">
                      {t.props.activityDescription}
                    </span>{' '}
                    {event.activityDescription}
                  </p>
                  <p>
                    <span className="prop-label">{t.props.productDescription}</span>{' '}
                    {event.productDescription}
                  </p>
                  <p>
                    <span className="prop-label">
                      {t.props.certificationDescription}
                    </span>{' '}
                    {event.certificationDescription}
                  </p>
                  <p>
                    <span className="prop-label">
                      {t.props.certificationStartDate}
                    </span>{' '}
                    {event.certificationStartDate}
                  </p>
                  <p>
                    <span className="prop-label">{t.props.lastUpdated}</span>{' '}
                    {lastUpdated}
                  </p>
                  <p>
                    <span className="prop-label">{t.stream.field}</span>{' '}
                    {getStreamFieldLabel(event.field, t)}
                  </p>
                  <p>
                    <span className="prop-label">{t.stream.from}</span>{' '}
                    {event.fromValue}
                  </p>
                  <p>
                    <span className="prop-label">{t.stream.to}</span>{' '}
                    {event.toValue}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </main>
  )
}

type ProviderCardProps = {
  provider: Provider
  expanded: boolean
  onToggle: () => void
  t: UiLocale
}

function ProviderCard({ provider, expanded, onToggle, t }: ProviderCardProps) {
  return (
    <li className={`provider-card${expanded ? ' provider-card--expanded' : ''}`}>
      <div className="provider-card-summary">
        <div className="provider-card-summary-text">
          <p className="provider-id">{provider.certificationNumber}</p>
          <h2>{provider.name}</h2>
          <p>
            <span className="prop-label">{t.props.postcode}</span>{' '}
            {provider.postcode}
          </p>
          <p>
            <span className="prop-label">{t.props.city}</span> {provider.city}
          </p>
          <p>
            <span className="prop-label">{t.props.province}</span>{' '}
            {provider.province}
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
