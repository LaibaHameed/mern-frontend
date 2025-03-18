'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from './Container';

const Breadcrumb = ({product}) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <div className="flex-center">
      <div className="flex-center w-full py-6">
        <Container>
          <nav className="text-gray-600 text-sm flex flex-col sm:px-6 mt-6">
            <div className="flex items-center justify-between space-x-4 mb-2">
              {/* Breadcrumb Links */}
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
                            {product?.name || formattedSegment}
                          </span>
                        ) : (
                          <BreadcrumbItem href={path} label={formattedSegment} />
                        )}
                      </li>
                    );
                })}
              </ul>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};

const BreadcrumbItem = ({ href, label }) => (
  <Link
    href={href}
    className="text-gray-700 text-md font-semibold hover:text-primary"
  >
    {label}
  </Link>
);

export default Breadcrumb;
