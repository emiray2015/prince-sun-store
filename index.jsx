import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Head from "next/head";
import { useRouter } from "next/router";

export default function PrinceSunStore() {
  const router = useRouter();

  const handleCheckout = (productName) => {
    router.push(`/checkout?product=${encodeURIComponent(productName)}`);
  };

  return (
    <div className="bg-pastel-peach min-h-screen text-gray-800">
      <Head>
        <title>Prince Sun – Soft Lifestyle Goods</title>
        <meta name="description" content="Discover pastel-toned eco-friendly products from Prince Sun." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-pastel-mint p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">Prince Sun</h1>
        <p className="text-center text-md">Soft lifestyle goods inspired by warmth and sunshine</p>
      </header>

      <main className="p-6 space-y-16">
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Elevate Everyday Living with Pastel Calm</h2>
          <p className="max-w-xl mx-auto">Discover our curated collection of pastel-toned, eco-conscious lifestyle products made to soothe and inspire.</p>
          <a href="#products">
            <Button className="bg-pastel-lavender hover:bg-pastel-pink">Shop Now</Button>
          </a>
        </section>

        <section id="products" className="space-y-4">
          <h3 className="text-xl font-semibold">Our Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Reusable Cotton Tote", "Soy Wax Candle", "Ceramic Mug Set"].map((name, i) => (
              <Card key={i} className="bg-white rounded-2xl shadow-md">
                <img src={`/images/product${i + 1}.jpg`} alt={name} className="rounded-t-2xl w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg">{name}</h4>
                  <p className="text-sm text-gray-600">A pastel-toned eco-friendly product.</p>
                  <p className="font-semibold mt-2">${(i + 1) * 10 + 8}.00</p>
                  <Button className="mt-3 bg-pastel-blue hover:bg-pastel-mint" onClick={() => handleCheckout(name)}>
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-pastel-rose p-6 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p className="text-gray-700 max-w-2xl">
            Prince Sun is a US-based lifestyle brand founded in 2023, inspired by the warmth of sunlight, soft tones, and sustainable living.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <form className="space-y-4 max-w-md" method="POST" action="https://formspree.io/f/your-form-id">
            <Input placeholder="Your Name" name="name" required />
            <Input placeholder="Email Address" type="email" name="email" required />
            <Textarea placeholder="Your Message" name="message" rows={4} required />
            <Button className="bg-pastel-lavender hover:bg-pastel-pink" type="submit">Send Message</Button>
          </form>
        </section>
      </main>
    </div>
  );
}
