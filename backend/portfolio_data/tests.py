from django.test import TestCase
from .models import Summary

class SummaryTestCase(TestCase):
    def setUp(self):
        Summary.objects.create(content="Test summary")

    def test_summary_content(self):
        summary = Summary.objects.get(content="Test summary")
        self.assertEqual(summary.content, "Test summary")