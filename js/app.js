/**
 * LMS Request Portal - Application Logic
 */

// ── Configuration ──────────────────────────────────────────
const FORM_URLS = {
  lmsSupport:       'https://forms.office.com/r/MpQgk7SC8M',
  publishILT:       'https://forms.office.com/r/LNmei15wLf',
  publishELearning: 'https://forms.office.com/r/qeTJ2Sdq9F',
  publishExam:      'https://forms.office.com/r/X7DqDwYwHh',
  updateContent:    'https://forms.office.com/r/ujUuKdZrT5',
};

// ── Initialization ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Bind form URLs from config to all links with [data-form] attributes
  document.querySelectorAll('[data-form]').forEach(link => {
    const key = link.dataset.form;
    if (FORM_URLS[key]) {
      link.href = FORM_URLS[key];
    }
  });

  // Expandable card toggle (replaces inline onclick)
  const publishCard = document.getElementById('publishCard');
  const publishHeader = publishCard?.querySelector('.card-header');

  if (publishHeader) {
    publishHeader.addEventListener('click', () => {
      publishCard.classList.toggle('is-open');
    });
  }

  // FAQ accordion toggles
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.faq-item').classList.toggle('is-open');
    });
  });
});
