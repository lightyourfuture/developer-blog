export default function TestScrollPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8">Smooth Scroll Test</h1>
                <p className="text-lg mb-4">
                    Scroll down to test the Lenis smooth scrolling effect.
                </p>

                {/* Generate multiple sections to enable scrolling */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <section key={i} className="mb-16 p-8 rounded-lg border border-border">
                        <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
                        <p className="text-muted-foreground">
                            This is test content for section {i + 1}. The smooth scroll effect
                            should make scrolling feel fluid and natural. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                    </section>
                ))}
            </div>
        </div>
    );
}
