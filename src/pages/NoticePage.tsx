

const NoticePage:React.FC = () => {
  return (
    <section className="bg-white text-white py-20">
        <div className="container max-w-5xl shadow-xl min-h-[600px] flex flex-col justify-between">
            <div className="bg-hover p-5 rounded-md">
                <h1 className="text-2xl font-bold">বাৎসরিক ও মিডটার্ম পরীক্ষার নোটিশ</h1>
                <p className="text-gray-200">18 December 2025</p>
            </div>
            <div className="bg-white text-black p-5">
                আসসালামু আলাইকুম, <br /> <br />
                অত্র মাদরাসার সকল ছাত্রের অবগতির জন্য জানানো যাচ্ছে যে, আগামী ১১, ১২ তারিখ থেকে মাদরাসার চূড়ান্ত পরীক্ষা শুরু হতে যাচ্ছে
                <br /> <br />
                অতএব সকল প্রকার বকেয়ে পরিশোধ করে পরীক্ষায় অংশগ্রহণ করার অনুরোধ জানানো যাচ্ছে

            </div>

            <div className="bg-gray-100 p-5 flex justify-center rounded-md">
                <button className="bg-button py-2 cursor-pointer hover:bg-hover px-4 rounded-full text-white">সকল নোটিশ দেখুন </button>
            </div>
        </div>
    </section>
  )
}

export default NoticePage