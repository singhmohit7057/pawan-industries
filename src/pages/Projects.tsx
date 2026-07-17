import { useState } from 'react';
import { X } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import type { Project } from '../types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary h-[200px] sm:h-[240px] lg:h-[280px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary-light rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-blue-200 font-semibold text-sm tracking-wide uppercase mb-3">
              Our Projects
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Project Portfolio</h1>
            <p className="mt-3 text-blue-100 sm:text-lg leading-relaxed">
              Explore our diverse portfolio of projects across ceramic, glass, railway, chemical,
              and structural industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-accent text-secondary hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-primary/30 transition-all cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <span className="text-xs bg-blue-50 text-primary px-2 py-1 rounded-full font-medium">
                    {project.industry}
                  </span>
                  <h3 className="font-semibold text-secondary mt-3">{project.title}</h3>
                  <p className="text-sm text-muted mt-2 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-bold text-secondary">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-muted hover:text-secondary p-1"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-48 w-full object-cover rounded-lg mb-6"
              />
              <span className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full font-medium">
                {selectedProject.industry}
              </span>
              <p className="mt-4 text-muted leading-relaxed">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
