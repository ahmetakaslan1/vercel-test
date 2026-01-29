export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <h2>About Header</h2>
      {children}   
    </div>
  );
}