import { useLanguage } from '../../i18n/LanguageContext'
import { CTA_I18N } from './CtaBanner.i18n'
import { scrollToSection } from './Nav'

const btnBase =
  'inline-flex items-center justify-center gap-2 font-body text-[13px] uppercase cursor-pointer transition-colors duration-200 px-12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg'

export default function CtaBanner() {
  const t = CTA_I18N[useLanguage().lang]
  return (
    <section
      id="cta"
      className="flex scroll-mt-[72px] flex-col gap-10 bg-lime px-6 py-12 min-[431px]:flex-row min-[431px]:flex-wrap min-[431px]:items-center min-[431px]:justify-between min-[431px]:px-12 min-[431px]:py-20 lg:scroll-mt-[80px]"
    >
      <div>
        <h2 className="font-display text-[clamp(40px,7vw,88px)] font-bold leading-[0.88] uppercase text-bg">
          {t.titleTop}
          <br />
          {t.titleBottom}
        </h2>
        <p className="mt-[18px] font-body text-[15px] font-normal text-bg/50">
          {t.lead}
        </p>
      </div>
      <div className="flex shrink-0 flex-col gap-3">
        <button
          type="button"
          onClick={() => scrollToSection('footer')}
          className={`${btnBase} border-none bg-bg py-[18px] font-semibold tracking-[0.08em] text-lime hover:bg-section`}
        >
          {t.order}
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('footer')}
          className={`${btnBase} border border-bg/25 bg-transparent py-[17px] font-medium tracking-[0.06em] text-bg hover:border-bg/60`}
        >
          {t.write}
        </button>
      </div>
    </section>
  )
}
