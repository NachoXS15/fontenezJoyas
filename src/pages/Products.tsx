import Card from "../components/Card";
import Categories from "../components/Categories";
import Layout from "../components/Layout";

export default function Products() {
  return (
    <Layout>
        <main className="max-w-full flex justify-center font-serif">
            <Categories />
            <section className="w-full md:w-9/12 flex items-start justify-center m-auto bg-slate-50 px-5 md:px-10 py-12">
                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-1">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </main>
    </Layout>
  )
}
