#!/usr/bin/env python
# -*- coding: utf-8 -*-

from typing import Optional
from flask import Flask


class PageTemplate:
    """Prototype for a page
    (naive, yet to be researched/implemented)"""
    page_title: str

    def __init__(self, page_title: Optional[str] = None) -> None:
        """Constructor for PageTemplate class

        Args:
            page_title (Optional[str], optional): If not supplied, defaults to "untitled".
        """
        self.page_title = page_title or "untitled"


def main() -> None:
    app = Flask(__name__)
    app.run()


if __name__ == '__main__':
    main()
