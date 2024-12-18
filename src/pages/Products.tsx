import Card from "../components/Card";
import Categories from "../components/Categories";
import Layout from "../components/Layout";

export default function Products() {
  return (
    <Layout>
        <main className="max-w-full flex font-serif">
            <Categories />
            <section className="w-9/12 flex items-start justify-center bg-slate-50 px-10 py-12">
                <div className="flex flex-wrap items-start justify-center gap-7">
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
