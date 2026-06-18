import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const HomeTwoPage = lazy(() => import('./pages/HomeTwoPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage.jsx'))
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage.jsx'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage.jsx'))
const FaqsPage = lazy(() => import('./pages/FaqsPage.jsx'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.jsx'))
const ProductsPage = lazy(() => import('./pages/ProductsPage.jsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'))
const StarterPage = lazy(() => import('./pages/StarterPage.jsx'))
const ProtectedPage = lazy(() => import('./pages/ProtectedPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))
const ChangelogPage = lazy(() => import('./pages/ChangelogPage.jsx'))
const InstructionsPage = lazy(() => import('./pages/InstructionsPage.jsx'))
const LicensesPage = lazy(() => import('./pages/LicensesPage.jsx'))
const StyleGuidePage = lazy(() => import('./pages/StyleGuidePage.jsx'))

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="page-shell">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index" element={<HomePage />} />
            <Route path="/home-2" element={<HomeTwoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detail_blog" element={<BlogDetailPage />} />
            <Route path="/detail_case-study" element={<CaseStudyDetailPage />} />
            <Route path="/detail_service" element={<ServiceDetailPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/starter-page" element={<StarterPage />} />
            <Route path="/401" element={<ProtectedPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/utility-pages/changelog" element={<ChangelogPage />} />
            <Route path="/utility-pages/instructions" element={<InstructionsPage />} />
            <Route path="/utility-pages/licenses" element={<LicensesPage />} />
            <Route path="/utility-pages/style-guide" element={<StyleGuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
