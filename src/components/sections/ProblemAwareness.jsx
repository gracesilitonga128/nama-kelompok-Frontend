import React from 'react';

const ProblemAwareness = () => {
  const problems = [
    {
      stat: "65%",
      description: "orang Indonesia kesulitan membedakan berita hoaks dan fakta",
      source: "Kominfo 2023"
    },
    {
      stat: "3x",
      description: "lebih mungkin percaya informasi yang sesuai dengan keyakinan",
      source: "Journal of Media Literacy"
    },
    {
      stat: "2.5 jam",
      description: "rata-rata waktu terbuang untuk informasi tidak penting sehari",
      source: "Digital Wellbeing Report"
    }
  ];

  return (
    <section className="section-optimized bg-white">
      <div className="container-optimized">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Masalah yang <span className="text-red-500">Sering Tidak Disadari</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Tanpa kemampuan literasi yang baik, kita rentan menjadi korban misinformasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16 px-4 sm:px-0">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-3 sm:mb-4">{problem.stat}</div>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg font-medium leading-relaxed">{problem.description}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{problem.source}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center border border-red-100">
          <div className="max-w-3xl mx-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Solusinya Bukan Sekadar "Baca Lebih Banyak"
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Tapi <strong className="text-red-600">membaca dengan cara yang lebih cerdas</strong> - mampu menganalisis, 
              memverifikasi, dan mengambil keputusan berdasarkan informasi yang terpercaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAwareness;
