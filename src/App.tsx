import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'

const HomePage = lazy(() => import('./pages/HomePage.tsx'))
const HomeTwoPage = lazy(() => import('./pages/HomeTwoPage.tsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage.tsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'))
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage.tsx'))
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage.tsx'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage.tsx'))
const FaqsPage = lazy(() => import('./pages/FaqsPage.tsx'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.tsx'))
const ProductsPage = lazy(() => import('./pages/ProductsPage.tsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.tsx'))
const StarterPage = lazy(() => import('./pages/StarterPage.tsx'))
const ProtectedPage = lazy(() => import('./pages/ProtectedPage.tsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'))
const ChangelogPage = lazy(() => import('./pages/ChangelogPage.tsx'))
const InstructionsPage = lazy(() => import('./pages/InstructionsPage.tsx'))
const LicensesPage = lazy(() => import('./pages/LicensesPage.tsx'))
const StyleGuidePage = lazy(() => import('./pages/StyleGuidePage.tsx'))

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
