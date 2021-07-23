function ListPageHeader({ label = "Products" }) {
  return (
    <section className="h-12 mt-6 flex justify-between items-center">
      <h1 className="text-palette-primary px-5 text-2xl">{label}</h1>
    </section>
  );
}

export default ListPageHeader;
