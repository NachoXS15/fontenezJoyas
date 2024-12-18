import Card from "../components/Card";
import Categories from "../components/Categories";
import Layout from "../components/Layout";

export default function Products() {
  return (
    <Layout>
        <main className="max-w-full flex justify-center font-serif">
            <Categories />
            <section className="w-full md:w-9/12 flex items-start justify-center m-auto bg-slate-50 px-5 md:px-10 py-12">
                <div className="w-full flex flex-wrap items-start justify-center gap-4 md:gap-9">
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
