import { useState } from 'react'
import { motion } from 'motion/react'
import { isSafeUrl } from '../utils/url'
import type { Resource } from '../types'
import resources from '../data/resources'

export default function Home() {
  const [query, setQuery] = useState('')

  const filtered = resources.filter((r: Resource) =>
    r.title.toLowerCase().includes(query.toLowerCase()) || r.description.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="landing" role="main">
      <header className="hero" aria-labelledby="home-title">
        <motion.h1
          id="home-title"
          className="hero__title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Disability Resources
        </motion.h1>
        <p className="hero__subtitle">
          A curated list of support services, advocacy groups, and tools for
          people with disabilities.
        </p>

        <div>
          <label htmlFor="search" className="sr-only">
            Search resources
          </label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources..."
            className="feature-search"
            aria-label="Search resources"
          />
        </div>
        <div className="hero__divider" aria-hidden="true"></div>
      </header>

      <section className="features" aria-live="polite">
        {filtered.map((res) => {
          const safe = isSafeUrl(res.url)
          return (
            <motion.a
              key={res.id}
              href={safe ? res.url : undefined}
              className="feature-card"
              target={safe ? '_blank' : undefined}
              rel={safe ? 'noopener noreferrer' : undefined}
              aria-disabled={!safe}
              onClick={(e) => {
                if (!safe) e.preventDefault()
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="feature-card__icon" aria-hidden>
                🔗
              </span>
              <h2 className="feature-card__title">{res.title}</h2>
              <p className="feature-card__desc">{res.description}</p>
            </motion.a>
          )
        })}
        {filtered.length === 0 && (
          <p className="no-results">No resources matched your search.</p>
        )}
      </section>
    </div>
  )
}
