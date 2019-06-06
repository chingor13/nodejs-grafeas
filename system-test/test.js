/**
 * Copyright 2019, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {assert} = require('chai');

const projectId = process.env.GCLOUD_PROJECT;

describe('GrafeasSystemTest', () => {
  it('lists occurrences', async () => {
    // instantiate the client.
    const {GrafeasClient} = require('../');
    const client = new GrafeasClient();

    // create the request.
    const formattedName = client.projectPath(projectId);
    const request = {
      parent: formattedName,
    };

    // run the request.
    const [resp] = await client.listOccurrences(request);

    assert.gte(resp.length, 0);
  });
});
