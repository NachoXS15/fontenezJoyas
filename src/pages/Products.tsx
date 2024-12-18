import Card from "../components/Card";
import Categories from "../components/Categories";
import Layout from "../components/Layout";

export default function Products() {
  return (
    <Layout>
        <main className="max-w-full flex justify-center md:justify-start font-serif">
            <Categories />
            <section className="w-full md:w-9/12 flex items-start justify-center bg-slate-50 px-10 py-12">
                <div className="w-full flex flex-wrap items-start justify-center gap-7">
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
