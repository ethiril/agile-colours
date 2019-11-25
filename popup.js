// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let colourIssueCheckBox

document.addEventListener('DOMContentLoaded', function () {
    colourIssueCheckBox = document.getElementById('cb-colourissue');

    function updateTogglesData () {
        chrome.storage.sync.set({toggles: {
            colourissue: colourIssueCheckBox.checked
          }});
    }
    chrome.storage.sync.get('toggles', function(data) {
        colourIssueCheckBox.checked = data.toggles.colourissue;
        colourIssueCheckBox.addEventListener('change', () => {
            updateTogglesData();
        });
    });
  });
