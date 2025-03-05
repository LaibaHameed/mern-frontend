'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Container from './Container';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <div className="flex-center">
      <div className="bg-gray-100 flex-center w-full py-24 px-24">
        <Container>
          <nav className="text-gray-600 text-sm flex-center flex-col">
            <h1 className="text-4xl font-serif font-semibold text-secondary mb-4 tracking-tighter">
              Shop
            </h1>
            <ul className="flex space-x-2">
              <BreadcrumbItem href="/" label="Home" />
              {pathSegments.map((segment, index) => {
                const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
                const isLast = index === pathSegments.length - 1;
                const formattedSegment = decodeURIComponent(segment)
                  .replace(/-/g, ' ')
                  .replace(/\b\w/g, (char) => char.toUpperCase());

                return (
                  <li key={path} className="flex items-center">
                    <span className="mx-2">/</span>
                    {isLast ? (
                      <span className="text-primary text-md font-semibold">
                        {formattedSegment}
                      </span>
                    ) : (
                      <BreadcrumbItem href={path} label={formattedSegment} />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

const BreadcrumbItem = ({href, label}) => (
  <Link
    href={href}
    className="text-gray-700 text-md font-semibold hover:text-primary"
  >
    {label}
  </Link>
);

export default Breadcrumb;
