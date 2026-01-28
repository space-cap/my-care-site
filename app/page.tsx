import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, DollarSign, Heart, Shield, Star, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold tracking-tight text-slate-900">케어플러스</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
              혜택
            </Link>
            <Link href="#process" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
              지원절차
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
              후기
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              로그인
            </Link>
            <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full">
              지원하기
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  당신의 따뜻한 마음이 <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                    더 큰 가치로 돌아옵니다
                  </span>
                </h1>
                <p className="mb-8 text-lg text-slate-600 sm:text-xl leading-relaxed">
                  케어플러스는 간병사님의 전문성을 존중하며
                  최고의 대우를 약속합니다. 지금 바로 등록하고
                  원하는 조건으로 일과 삶의 균형을 찾아보세요.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="lg" className="h-12 bg-rose-500 hover:bg-rose-600 text-white text-lg px-8 rounded-full shadow-lg shadow-rose-200">
                    간병사 등록하기
                  </Button>
                  <Button variant="outline" size="lg" className="h-12 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full px-8">
                    자세히 알아보기
                  </Button>
                </div>
                <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>업계 최고 대우</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>배상책임보험 가입</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>빠른 정산 시스템</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/images/hero-image.png"
                    alt="Friendly caregiver helping a senior"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay gradient for better text readability if needed, though split layout handles it */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 top-10 -right-10 h-72 w-72 bg-orange-100 rounded-full blur-3xl opacity-50 opacity-60 mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                <div className="absolute -z-10 -bottom-10 -left-10 h-72 w-72 bg-rose-100 rounded-full blur-3xl opacity-50 opacity-60 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats/Social Proof Section */}
        <section className="border-y border-slate-200 bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-900">5,000+</h3>
                <p className="text-sm font-medium text-slate-500">활동 중인 간병사</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-900">98%</h3>
                <p className="text-sm font-medium text-slate-500">서비스 만족도</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-900">10분</h3>
                <p className="text-sm font-medium text-slate-500">평균 매칭 시간</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-900">0원</h3>
                <p className="text-sm font-medium text-slate-500">등록/가입비</p>
              </div>
            </div>
          </div>
        </section>


        {/* Benefits Section */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    왜 케어플러스인가요?
                  </h2>
                  <p className="mt-4 text-lg text-slate-600">
                    간병사님들이 오직 케어에만 집중할 수 있도록 <br />
                    최상의 환경을 제공합니다.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md">
                    <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-slate-900">업계 최고 수준의 보수</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        투명한 수가 체계를 통해 노력한 만큼 정당한 보상을 받으세요.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md">
                    <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-slate-900">원하는 스케줄 선택</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        내 일정에 맞춰 근무 시간과 지역을 자유롭게 선택하세요.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md">
                    <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-slate-900">든든한 배상책임보험</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        사고에 대비해 배상책임보험을 무상으로 지원합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative w-full lg:h-[600px] h-96">
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/feature-tab.png"
                    alt="Professional caregiver using technology"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative dot pattern or shape could go here */}
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue-500/10 blur-xl" />
                <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-rose-500/10 blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                쉽고 빠른 시작
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                복잡한 절차 없이 간편하게 등록하고 <br />
                바로 일자리를 찾아보세요.
              </p>
            </div>
            <div className="relative">
              {/* Line connector for desktop */}
              <div className="absolute top-1/2 left-0 hidden w-full -translate-y-1/2 md:block">
                <div className="h-0.5 w-full bg-slate-100" />
              </div>
              <div className="grid gap-12 md:grid-cols-3 relative z-10">
                <div className="flex flex-col items-center text-center group">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-rose-50 text-xl font-bold text-rose-500 shadow-sm group-hover:border-rose-200 transition-colors">
                    1
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">회원가입 및 프로필 등록</h3>
                  <p className="text-slate-600">자격증 정보와 경력을 입력하여<br />신뢰도 높은 프로필을 완성하세요.</p>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-rose-50 text-xl font-bold text-rose-500 shadow-sm group-hover:border-rose-200 transition-colors">
                    2
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">맞춤 일자리 매칭</h3>
                  <p className="text-slate-600">알림을 통해 내 조건에 딱 맞는<br />일자리를 실시간으로 추천받으세요.</p>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-rose-50 text-xl font-bold text-rose-500 shadow-sm group-hover:border-rose-200 transition-colors">
                    3
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">안전한 근무 및 정산</h3>
                  <p className="text-slate-600">케어 서비스를 제공하고<br />빠르고 정확하게 정산받으세요.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                생생한 활동 후기
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                먼저 시작하신 간병사님들의 이야기를 들어보세요.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Review 1 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  "아이를 키우느라 경력이 단절되어 걱정했는데, 케어플러스 교육을 받고 자신감을 얻었어요.
                  원하는 시간에만 일할 수 있어서 육아와 병행하기 딱 좋습니다."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 full rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">
                    김
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">김미영 님</p>
                    <p className="text-sm text-slate-500">40대 / 주부</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  "간병 일을 오래 했지만, 대우가 좋지 않아 고민이 많았습니다.
                  케어플러스는 수가도 투명하고 배상책임보험까지 들어주니 안심하고 일합니다."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 full rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    이
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">이성호 님</p>
                    <p className="text-sm text-slate-500">50대 / 요양보호사</p>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  "은퇴 후 소일거리를 찾다가 시작했습니다.
                  제가 누군가에게 도움이 된다는 보람도 크고,
                  수입도 쏠쏠해서 생활에 활력이 돕니다."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 full rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    박
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">박정숙 님</p>
                    <p className="text-sm text-slate-500">60대 / 은퇴자</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta-group.png"
              alt="Group of happy caregivers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/80" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-white">
                지금 바로 케어플러스의 파트너가 되어주세요
              </h2>
              <p className="mb-10 text-lg text-slate-200 max-w-2xl mx-auto font-medium">
                이미 5,000명의 간병사님들이 케어플러스와 함께하고 있습니다. <br />
                당신의 전문성이 더 빛날 수 있도록 최선을 다해 지원하겠습니다.
              </p>
              <Button size="lg" className="h-14 bg-rose-500 hover:bg-rose-600 text-white text-lg px-10 rounded-full shadow-lg shadow-rose-900/50 hover:scale-105 transition-transform">
                무료로 시작하기
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-rose-500" />
                <span className="text-lg font-bold text-slate-900">케어플러스</span>
              </div>
              <p className="text-sm text-slate-500 max-w-xs">
                믿을 수 있는 간병 서비스를 제공하는<br />
                대한민국 1등 헬스케어 플랫폼
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold text-slate-900">서비스</h4>
                <Link href="#" className="text-sm text-slate-500 hover:text-rose-600">간병신청</Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-rose-600">간병사찾기</Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-rose-600">이용요금</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold text-slate-900">고객센터</h4>
                <Link href="#" className="text-sm text-slate-500 hover:text-rose-600">공지사항</Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-rose-600">자주묻는질문</Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-rose-600">1:1문의</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold text-slate-900">회사</h4>
                <Link href="#" className="text-sm text-slate-500 hover:text-rose-600">회사소개</Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-rose-600">채용정보</Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-rose-600">제휴문의</Link>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
            © 2026 CarePlus Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
